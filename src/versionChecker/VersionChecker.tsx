import PackageJon from '../../package.json';

const VersionChecker = (): string => {
    const version = PackageJon.version;

    return version;
}

export default VersionChecker;