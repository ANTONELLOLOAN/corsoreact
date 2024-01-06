import { createSlice } from "@reduxjs/toolkit";

export const citiesSlice = createSlice({
    name: 'cities',
    initialState: {
        value: [
            {
                id: 0,
                isVisited: true,
                name: "Tokio",
                imgURL:
                  "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description:
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos       facilis deserunt mollitia nihil placeat velit.",
              },
              {
                id: 1,
                isVisited: false,
                name: "New York",
                imgURL:
                  "https://images.unsplash.com/photo-1522083165195-3424ed129620?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description:
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos       facilis deserunt mollitia nihil placeat velit.",
              },
              {
                id: 2,
                isVisited: true,
                name: "Rome",
                imgURL:
                  "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description:
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos       facilis deserunt mollitia nihil placeat velit.",
              },
              {
                id: 3,
                isVisited: false,
                name: "Paris",
                imgURL:
                  "https://images.unsplash.com/photo-1431274172761-fca41d930114?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description:
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos        facilis deserunt mollitia nihil placeat velit.",
              },
        ],
    },
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload)
        },
    },
})

export const {add} = citiesSlice.actions

export const citiesReducer = citiesSlice.reducer