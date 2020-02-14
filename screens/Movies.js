import React from 'react'
import { Text, View, Card, CardItem } from 'native-base'
import { ScrollView } from 'react-native'
import Movie from '../components/movie/Movie'
import { get } from '../utils/api'

class Movies extends React.Component {
    constructor() {
        super()

        this.state = {
            loading: false,
            movies: []
        }
    }

    async getData() {
        this.setLoading(true)
    
        try {
          const res = await get('movie/popular')
          console.log(res)
    
          this.setState((state) => {
            return {
              ...state,
              movies: res.results,
            }
          });
        } catch(err) {
          console.log(err)
        } finally {
          this.setLoading(false)
        }
    }

    setLoading(loading) {
        this.setState((state) => {
          return {
            ...state,
            loading, // loading: loading
          }
        })
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <ScrollView style={{ padding: 15 }}>
                {
                    this.state.movies.map((movie) => (
                        <Movie 
                            title={movie.title}
                            poster_path={movie.poster_path}
                        />
                    ))
                }
            </ScrollView>
        )
    }
}

export default Movies