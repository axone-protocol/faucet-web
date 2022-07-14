export type Config = {
    chain: Chain
    faucet: string
}

export type Chain = {
    id: string
    name: string
    endpoints: {
        rpc: string
        rest: string
    }
}
