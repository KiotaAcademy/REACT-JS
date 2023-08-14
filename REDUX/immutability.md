# immutability

we need to make our states immutable `object.assign`

this allows us to:

1. take snapshots of our state
2. undo the application to the previous state
3. recreate state from URL - when you reload your browser you will still have your data
4. time travel

you clone and make a copy of a state, then change the copy
