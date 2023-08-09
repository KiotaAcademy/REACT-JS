# useContext()

Here we create a shared context at some level where all the data below that level in the react component tree, can share data without having to pass props into components.

## using the useContext()

1. define context using `createContext`:

    ```js
    const context = createContext()
    ```

2. wrap relevant parts of your code with contextProvider

   ```js
   export default function App(){
    const sharedValue = "Hello from context provider"
    return(
        <context.Provider value={sharedValue}>
            <FirstComponent/>
        </context.Provider>
    )
   }
   ```

3. now to use the shared value in the individual contexts you:

    ```js
    export default function FirstComponent(){
        const contextSharedValue = useContext(context)

        return (
            <p>{contextSharedValue}</p>
        )
    }
    ```

this shows a full implemantation of the useContext hook.
