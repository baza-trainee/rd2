export type CacheType = {
    emailIsLoaded: boolean,
    phoneIsLoaded: boolean,
    logosIsLoaded: boolean,
}

export type CacheContextType = {
    cache:  CacheType,
    setCache:(cache: CacheType) => void
}