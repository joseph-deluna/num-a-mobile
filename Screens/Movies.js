import React from 'react'
import { Text, View, Card, CardItem, Grid } from 'native-base'
import { get } from '../utils/api'
import Movie  from '../Components/Movie'
import { ScrollView } from 'react-native-gesture-handler'


class Movies extends React.Component {

    constructor() {
      super()
      this.state = {
          loading: false,
          movies: []
      }
      }
    async getData(){
        this.setLoading(true)
      
  try{
    const res= await get(`movie/popular`)
    console.log(res)
    this.setState((state) => {
      return {
        ...state,
        movies: res.results,
      }
    }
    );
  }
  catch(err){
    console.log(err)
  }finally {
    this.setLoading(false)
  }
  }
    componentDidMount() {
      this.getData()
      }
    
    setLoading (loading){
      this.setState((state) =>{
        return{
          ...state,
          loading,
        }
      })
    }
    render() {
            const { loading, movies } = this.state
            return (
                <ScrollView style = {{padding: 15}}>
                 
                    {
                        movies && movies.map((movies) => ( 
                        <Movie title = {movies.title}/>
                         ))
                    }
                </ScrollView>
            )       
          
}
}
export default Movies

