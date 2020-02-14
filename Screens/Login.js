import React from ' react '
import { Form, Container } from 'native-base'

class Login extends React.Component(){
    constructor()
    {
        super()
        this.state ={
            form: {}
        }
    }


    handleFormSubmit() {
        post('Login', this.state.form)
        .then ((res)=>{
            console.log(res)
        } )
    }

    handleInputChange(key, value){
            this.setState((state) =>{
            return{
                ...state,
                form: {
                    ...state.form,
                    [key]: value
                }
            }
        })
    }
    render() {
        return(
            
            <Form>

                <Container style = {{paddingHorizontal: 15}}>
                    
                <Text>
                  Login As:
                </Text>
                <Button>
                    FARMER
                </Button>

                <Button>
                    BUYER
                </Button> 


                </Container>
               
            </Form>

        )
    }

}