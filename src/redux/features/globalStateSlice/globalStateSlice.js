import { createSlice, createReducer } from "@reduxjs/toolkit";
const initialState = {
  onOpenDropdown: false,
  onModalopen: false,
};
const GlobalStateSlice = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    openDropdown: (state, action) => {
      state.onOpenDropdown = true;
    },
    closeDropdown: (state) => {
      state.onOpenDropdown = false;
    },
    closeModalDropdown: (state) => {
      state.onModalopen = true;
    },
    openModalDropdown: (state) => {
      state.onModalopen = false;
    },
  },
});
export default GlobalStateSlice.reducer;
export const { openDropdown, closeDropdown } = GlobalStateSlice.actions;
export const realState = (state) => state.GlobalState.onOpenDropdown;
export const modalState = (state) => state.GlobalState.onModalopen;
/// const state = ({GlobalState}) => GlobalState.openDropdown
/**
 * 
 * 
 * const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    createPost(state, action) {},
    updatePost(state, action) {},
    deletePost(state, action) {},
  },
})

console.log(postsSlice)
/*
{
    name: 'posts',
    actions : {
        createPost,
        updatePost,
        deletePost,
    },
    reducer
}


const { createPost } = postsSlice.actions

console.log(createPost({ id: 123, title: 'Hello World' }))
// {type : "posts/createPost", payload : {id : 123, title : "Hello World"}}
const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    createPost(state, action) {},
    updatePost(state, action) {},
    deletePost(state, action) {},
  },
})

// Extract the action creators object and the reducer
const { actions, reducer } = postsSlice
// Extract and export each action creator by name
export const { createPost, updatePost, deletePost } = actions
// Export the reducer, either as a default or named export
export default reducer





  slice: "sliceB",
  initialState: 0,
  reducers: {
    increment(state, action) {
      return state + 1;
    },
    addTwo(state, action) {
      return state + 2;
    }
  },
  extraReducers: {
    [addFive](state, action) {
      return state + 5;
    }
  }
});

console.log(counterSliceB);
console.log("addFive, imported from A to B: ", addFive);

const { actions, reducer } = counterSliceB;

export const { increment, addTwo } = actions;

export default reducer;


import { createSlice } from "redux-starter-kit";

import { addTwo } from "./counterB";

const counterSliceA = createSlice({
  slice: "sliceA",
  initialState: 0,
  reducers: {
    increment(state, action) {
      return state + 1;
    },
    addFive(state, action) {
      return state + 5;
    }
  },
  extraReducers: {
    [addTwo](state, action) {
      return state + 2;
    }
  }
});

console.log(counterSliceA);
console.log("addTwo, imported from B to A: ", addTwo);

const { actions, reducer } = counterSliceA;

export const { increment, addFive } = actions;

export default reducer;





import * as React from "react";
import { render } from "react-dom";
import { configureStore } from "redux-starter-kit";
import { connect, Provider } from "react-redux";

import "./styles.css";

import counterAReducer, { increment as incrementA, addFive } from "./counterA";
import counterBReducer, { increment as incrementB, addTwo } from "./counterB";

const store = configureStore({
  reducer: {
    counterA: counterAReducer,
    counterB: counterBReducer
  }
});

console.log("Initial state: ", store.getState());

[incrementA, incrementB, addFive, addTwo].forEach(actionCreator => {
  store.dispatch(actionCreator());
  console.log(`After action '${actionCreator}': `, store.getState());
});

const mapState = state => state;

const actionCreators = {
  incrementA,
  incrementB,
  addTwo,
  addFive
};

function App({ counterA, counterB, incrementA, incrementB, addTwo, addFive }) {
  return (
    <React.Fragment>
      <div className="App">
        <h1>Circular Slice Dependencies Example</h1>
      </div>
      <h2>Counter Values</h2>
      <ul>
        <li>
          <b>Counter A</b>: {counterA}
        </li>
        <li>
          <b>Counter B</b>: {counterB}
        </li>
      </ul>

      <div>
        <button onClick={() => incrementA()}>Increment A</button>
        <button onClick={() => incrementB()}>Increment B</button>
        <button onClick={() => addTwo()}>Add Two to Both</button>
        <button onClick={() => addFive()}>Add Five to Both</button>
      </div>

      <p>
        Notice that "Add Five" only adds to A, not B. This is caused by circular
        imports between the <code>counterA.tsx</code> and{" "}
        <code>counterB.tsx</code> files. When B imports <code>addFive()</code>{" "}
        from A, A hasn't finished initializing yet, so <code>addFive()</code> is
        still undefined.
      </p>
    </React.Fragment>
  );
}

const ConnectedApp = connect(
  mapState,
  actionCreators
)(App);

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  rootElement
);



////// createAsyncThunk declarations
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { userAPI } from './userAPI'

// First, create the thunk
const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId, thunkAPI) => {
    const response = await userAPI.fetchById(userId)
    return response.data
  }
)

// Then, handle actions in your reducers:
const usersSlice = createSlice({
  name: 'users',
  initialState: { entities: [], loading: 'idle' },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload)
    })
  },
})

// Later, dispatch the thunk as needed in the app
dispatch(fetchUserById(123))
 */
