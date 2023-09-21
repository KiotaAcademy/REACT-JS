# DATA FETCHING APPROACHES

1. static data fetching
2. static data fething while revalidating
3. dynamic data fetching

## static data fetching

code:

```js
async function fetchData(){
    const res = await fetch(
        `api`
    )
    const data = res.json()
}
```
this data is only fetched once. then it is cached.

## static data fetching while revalidating

```js
async function fetchData(){
    const res = await fetch(
        'api',
        {next: {revalidate: 15}}
    )
    const data = res.json()
    return data
}
```

the request is revalidated every 15 seconds  -  that is data is refreshed every 15 seconds from the server

after initial render, cached data is rerendered until time interval, after time interval , show cached data and trigger  regeneration of data in the background.after successful invalidate cache, the new data is shown.


## static data fetching


```js
async function fetchData(){
    const res = await fetch(
        `api`,
        {cache: 'no-store'}
    )
    const data = await res.json()
    return data
}
```

this request is refetched after every request, it is never cached.
