import * as React from "react";
import AppDataContext, { initialAppData, AppData } from "./index";
import { Item } from "../ItemData"
import { Credentials } from "../../constants/Credentials";

type Props = {}

type State = AppData;



class AppDataProvider extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            ...initialAppData,
            addItem: this.addItem,
            getContainer: this.getContainer
        };
        this.getContainer = this.getContainer.bind(this);
        this.addItem = this.addItem.bind(this);
    }


    getContainer = () => {

        fetch(Credentials.SERVER_API_ENDPOINT + "foods/findAll/" + this.state.profile.id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(response => response.json())
            .then((response) => {
                /* if (response.exitCode !== 200) {
                    throw new Error('send-message API call failed with message: ' + response.message)
                } */
                console.log(response)
                this.setState({
                    container: response
                })
            })

        //alert("GET FOODS ITEMS")
    }


    addItem = (item: any, id: number, image: any) => {

        let photoUri = ''

        // No Image, don't fetch Image
        if (image != undefined) {
            let formData = new FormData()
            formData.append('file', JSON.parse(JSON.stringify({
                uri: image.uri,
                name: item.name + '.jpg',
                type: 'image/jpg',
            })))

            formData.append('fileName', item.name + '.jpg')

            photoUri = image.uri
            /* console.log("\n\n\n\n\n\n\n\n\n fufufufucktyuuu")
            console.log(formData) */

            /* console.log(this.props.navigation.getParam('image'))
            console.log(this.props.navigation.getParam('image').type) */

            console.log(Credentials.SERVER_API_ENDPOINT + "foods/register/" + id)

            fetch(Credentials.SERVER_API_ENDPOINT + "images/registerImage/foods/" + id, {
                method: "POST",
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Accept": "application/json"
                },
                body: formData
            }).then(response => response.json())
                .then((response) => {
                    if (response.exitCode !== 200) {
                        throw new Error('send-message API call failed with message: ' + response.message)
                    }
                    alert(JSON.stringify(response))
                    console.log(JSON.stringify(response))
                })
        }

        // When posting Item, uri is not required. We save S3's address on the backend side.
        fetch(Credentials.SERVER_API_ENDPOINT + "foods/register/" + id, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                id: id,
                ...item,
            })
        }).then(response => response.json())
            .then((response) => {
                if (response.exitCode !== 200) {
                    throw new Error('send-message API call failed with message: ' + response.message)
                }
            this.getContainer(); // 
            })

        
        
        console.log("********************addItem***************************")
        console.log(item)
        /* this.setState({
            newContainer: [...this.state.newContainer, item]
        }) */
    };

    render() {
        return (
            <AppDataContext.Provider value={this.state}>
                {this.props.children}
            </AppDataContext.Provider>
        );
    }
}

export default AppDataProvider;
