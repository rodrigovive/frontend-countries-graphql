module.exports = {
    schema: [
        {
            [process.env.REACT_APP_API_URL]: {
            }
        }
    ],
    documents: ["./src/graphql/queries.ts"],
    overwrite: true,
    generates: {
        "./src/graphql/types.ts": {
            plugins: [
                "typescript",
                "typescript-operations",
            ],
            config: {
                skipTypename: false,
                withHooks: true,
                withHOC: false,
                withComponent: false,
            }
        }
    }
};