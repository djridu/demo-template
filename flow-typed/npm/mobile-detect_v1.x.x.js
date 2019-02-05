// flow-typed signature: 33ee1442d1ffd44d6dd99dae677ed1db
// flow-typed version: da30fe6876/mobile-detect_v1.x.x/flow_>=v0.25.x

declare module 'mobile-detect' {
    declare type Grade = 'A' | 'B' | 'C';
    declare type OS =
        | 'AndroidOS'
        | 'BlackBerryOS'
        | 'PalmOS'
        | 'SymbianOS'
        | 'WindowsMobileOS'
        | 'WindowsPhoneOS'
        | 'iOS'
        | 'MeeGoOS'
        | 'MaemoOS'
        | 'JavaOS'
        | 'webOS'
        | 'badaOS'
        | 'BREWOS';
    declare type Phone =
        | 'iPhone'
        | 'BlackBerry'
        | 'HTC'
        | 'Nexus'
        | 'Dell'
        | 'Motorola'
        | 'Samsung'
        | 'LG'
        | 'Sony'
        | 'Asus'
        | 'NokiaLumia'
        | 'Micromax'
        | 'Palm'
        | 'Vertu'
        | 'Pantech'
        | 'Fly'
        | 'Wiko'
        | 'iMobile'
        | 'SimValley'
        | 'Wolfgang'
        | 'Alcatel'
        | 'Nintendo'
        | 'Amoi'
        | 'INQ'
        | 'GenericPhone';
    declare type Tablet =
        | 'iPad'
        | 'NexusTablet'
        | 'SamsungTablet'
        | 'Kindle'
        | 'SurfaceTablet'
        | 'HPTablet'
        | 'AsusTablet'
        | 'BlackBerryTablet'
        | 'HTCtablet'
        | 'MotorolaTablet'
        | 'NookTablet'
        | 'AcerTablet'
        | 'ToshibaTablet'
        | 'LGTablet'
        | 'FujitsuTablet'
        | 'PrestigioTablet'
        | 'LenovoTablet'
        | 'DellTablet'
        | 'YarvikTablet'
        | 'MedionTablet'
        | 'ArnovaTablet'
        | 'IntensoTablet'
        | 'IRUTablet'
        | 'MegafonTablet'
        | 'EbodaTablet'
        | 'AllViewTablet'
        | 'ArchosTablet'
        | 'AinolTablet'
        | 'NokiaLumiaTablet'
        | 'SonyTablet'
        | 'PhilipsTablet'
        | 'CubeTablet'
        | 'CobyTablet'
        | 'MIDTablet'
        | 'MSITablet'
        | 'SMiTTablet'
        | 'RockChipTablet'
        | 'FlyTablet'
        | 'bqTablet'
        | 'HuaweiTablet'
        | 'NecTablet'
        | 'PantechTablet'
        | 'BronchoTablet'
        | 'VersusTablet'
        | 'ZyncTablet'
        | 'PositivoTablet'
        | 'NabiTablet'
        | 'KoboTablet'
        | 'DanewTablet'
        | 'TexetTablet'
        | 'PlaystationTablet'
        | 'TrekstorTablet'
        | 'PyleAudioTablet'
        | 'AdvanTablet'
        | 'DanyTechTablet'
        | 'GalapadTablet'
        | 'MicromaxTablet'
        | 'KarbonnTablet'
        | 'AllFineTablet'
        | 'PROSCANTablet'
        | 'YONESTablet'
        | 'ChangJiaTablet'
        | 'GUTablet'
        | 'PointOfViewTablet'
        | 'OvermaxTablet'
        | 'HCLTablet'
        | 'DPSTablet'
        | 'VistureTablet'
        | 'CrestaTablet'
        | 'MediatekTablet'
        | 'ConcordeTablet'
        | 'GoCleverTablet'
        | 'ModecomTablet'
        | 'VoninoTablet'
        | 'ECSTablet'
        | 'StorexTablet'
        | 'VodafoneTablet'
        | 'EssentielBTablet'
        | 'RossMoorTablet'
        | 'iMobileTablet'
        | 'TolinoTablet'
        | 'AudioSonicTablet'
        | 'AMPETablet'
        | 'SkkTablet'
        | 'TecnoTablet'
        | 'JXDTablet'
        | 'iJoyTablet'
        | 'FX2Tablet'
        | 'XoroTablet'
        | 'ViewsonicTablet'
        | 'OdysTablet'
        | 'CaptivaTablet'
        | 'IconbitTablet'
        | 'TeclastTablet'
        | 'OndaTablet'
        | 'JaytechTablet'
        | 'BlaupunktTablet'
        | 'DigmaTablet'
        | 'EvolioTablet'
        | 'LavaTablet'
        | 'AocTablet'
        | 'MpmanTablet'
        | 'CelkonTablet'
        | 'WolderTablet'
        | 'MiTablet'
        | 'NibiruTablet'
        | 'NexoTablet'
        | 'LeaderTablet'
        | 'UbislateTablet'
        | 'PocketBookTablet'
        | 'KocasoTablet'
        | 'Hudl'
        | 'TelstraTablet'
        | 'GenericTablet';
    declare type UserAgent =
        | 'Vivaldi'
        | 'Chrome'
        | 'Dolfin'
        | 'Opera'
        | 'Skyfire'
        | 'Edge'
        | 'IE'
        | 'Firefox'
        | 'Bolt'
        | 'TeaShark'
        | 'Blazer'
        | 'Safari'
        | 'Tizen'
        | 'UCBrowser'
        | 'baiduboxapp'
        | 'baidubrowser'
        | 'DiigoBrowser'
        | 'Puffin'
        | 'Mercury'
        | 'ObigoBrowser'
        | 'NetFront'
        | 'GenericBrowser'
        | 'PaleMoon';
    declare type VersionKey = 'Mobile' | 'Build' | 'Version' | 'VendorID' | UserAgent;

    declare class MobileDetect {
        constructor(userAgent: string, maxPhoneWidth?: number): void;
        mobile(): string | null;
        mobileGrade(): Grade;
        os(): OS | null;
        phone(): Phone | null;
        tablet(): Tablet | null;
        userAgent(): UserAgent | null;
        userAgents(): Array<UserAgent>;
        version(key: VersionKey): number | null;
        versionStr(key: VersionKey): string | null;
        isPhoneSized(maxPhoneWidth?: number): boolean;
    }

    declare module.exports: Class<MobileDetect>;
}
