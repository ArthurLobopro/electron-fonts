export interface PackageRegistry {
    _id: string
    _rev: string
    name: string
    'dist-tags': {
        latest: string
    }
    versions: {
        [version: string]: {
            name: string
            author: {
                name: string
            }
            version: string
            license: string
            description: string
            keywords: string[]
            main: string
            typings: string
            publishConfig: {
                access: string
            }
            dependencies: {
                [dependency: string]: string
            }
            repository: {
                type: string
                url: string
            }
            bugs: {
                url: string
            }
            homepage: string
            _id: string
            _nodeVersion: string
            _npmVersion: string
            dist: {
                integrity: string
                shasum: string
                tarball: string
                fileCount: number
                unpackedSize: number
                signatures: {
                    keyid: string
                    sig: string
                }[]
                'npm-signature': string
            }
            _npmUser: {
                name: string
                email: string
            }
            directories: Record<string, never>
            maintainers: {
                name: string
                email: string
            }[]
            _npmOperationalInternal: {
                host: string
                tmp: string
            }
            _hasShrinkwrap: boolean
        }
    }
    time: {
        created: string
        modified: string;
        [version: string]: string
    }
    maintainers: {
        name: string
        email: string
    }[]
    description: string
    homepage: string
    keywords: string[]
    repository: {
        type: string
        url: string
    }
    author: {
        name: string
    }
    bugs: {
        url: string
    }
    license: string
    readme: string
    readmeFilename: string
}
