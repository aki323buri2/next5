export type IconType =
    | "3d"
    | "acrobat"
    | "audio"
    | "android"
    | "binary"
    | "code"
    | "compressed"
    | "document"
    | "drive"
    | "font"
    | "image"
    | "presentation"
    | "settings"
    | "spreadsheet"
    | "vector"
    | "video"

export interface FileIconProps {
    color?: string | undefined;
    extension?: string | undefined;
    fold?: boolean | undefined;
    foldColor?: string | undefined;
    glyphColor?: string | undefined;
    gradientColor?: string | undefined;
    gradientOpacity?: number | undefined;
    labelColor?: string | undefined;
    labelTextColor?: string | undefined;
    labelTextStyle?: object | undefined;
    labelUppercase?: boolean | undefined;
    radius?: number | undefined;
    type?: IconType | undefined;
}

export type DefaultExtensionType =
    | "3dm"
    | "3ds"
    | "3g2"
    | "3gp"
    | "7zip"
    | "aab"
    | "aac"
    | "aep"
    | "ai"
    | "aif"
    | "aiff"
    | "apk"
    | "apkm"
    | "apks"
    | "asf"
    | "asp"
    | "aspx"
    | "avi"
    | "bin"
    | "bmp"
    | "c"
    | "cpp"
    | "cs"
    | "css"
    | "csv"
    | "cue"
    | "dll"
    | "dmg"
    | "doc"
    | "docx"
    | "dwg"
    | "dxf"
    | "eot"
    | "eps"
    | "exe"
    | "flac"
    | "flv"
    | "fnt"
    | "fodp"
    | "fods"
    | "fodt"
    | "fon"
    | "gif"
    | "gz"
    | "htm"
    | "html"
    | "indd"
    | "ini"
    | "java"
    | "jpeg"
    | "jpg"
    | "js"
    | "json"
    | "jsx"
    | "m4a"
    | "m4v"
    | "max"
    | "md"
    | "mid"
    | "mkv"
    | "mov"
    | "mp3"
    | "mp4"
    | "mpeg"
    | "mpg"
    | "msg"
    | "obj"
    | "odp"
    | "ods"
    | "odt"
    | "ogg"
    | "ogv"
    | "otf"
    | "pdf"
    | "php"
    | "pkg"
    | "plist"
    | "png"
    | "ppt"
    | "pptx"
    | "pr"
    | "ps"
    | "psd"
    | "py"
    | "rar"
    | "rb"
    | "rm"
    | "rtf"
    | "scss"
    | "sitx"
    | "skp"
    | "svg"
    | "swf"
    | "sys"
    | "tar"
    | "tex"
    | "tif"
    | "tiff"
    | "ts"
    | "ttf"
    | "txt"
    | "wav"
    | "webm"
    | "wmv"
    | "woff"
    | "wpd"
    | "wps"
    | "xapk"
    | "xlr"
    | "xls"
    | "xlsx"
    | "yml"
    | "zip"
    | "zipx"
    | string 
export type DefaultStyles = Record<DefaultExtensionType, Partial<FileIconProps>>;
export type FileIcon = React.FunctionComponent<FileIconProps>;
export const defaultStyles: DefaultStyles = {
  '3dm': {
    labelColor: '#8D1A11',
    type: '3d',
  },
  '3ds': {
    labelColor: '#5FB9AD',
    type: '3d',
  },
  '3g2': {
    type: 'video',
  },
  '3gp': {
    type: 'video',
  },
  '7zip': {
    color: "#fee472",
    labelColor: "#fbc348",  
    type: 'compressed',
  },
  aab: {
    type: 'android',
    labelColor: '#3DDC84',
  },
  aac: {
    type: 'audio',
  },
  aep: {
    type: 'video',
  },
  ai: {
    color: '#423325',
    gradientOpacity: 0,
    labelColor: '#423325',
    labelTextColor: '#FF7F18',
    labelUppercase: true,
    foldColor: '#FF7F18',
    radius: 2,
  },
  aif: {
    type: 'audio',
  },
  aiff: {
    type: 'audio',
  },
  apk: {
    type: 'android',
    labelColor: '#3DDC84',
  },
  apkm: {
    type: 'android',
    labelColor: '#3DDC84',
  },
  apks: {
    type: 'android',
    labelColor: '#3DDC84',
  },
  asf: {
    type: 'video',
  },
  asp: {
    type: 'code',
  },
  aspx: {
    type: 'code',
  },
  avi: {
    type: 'video',
  },
  bin: {
    type: 'binary',
  },
  bmp: {
    type: 'image',
  },
  c: {
    type: 'code',
  },
  cpp: {
    type: 'code',
  },
  cs: {
    type: 'code',
  },
  css: {
    type: 'code',
  },
  csv: {
    foldColor: '#16613F',
    glyphColor: 'rgba(255,255,255,0.4)',
    labelColor: '#1A754C',
    labelUppercase: true,
    type: 'spreadsheet',
  },
  cue: {
    type: 'document',
  },
  dll: {
    type: 'settings',
  },
  dmg: {
    type: 'drive',
  },
  doc: {
    color: '#2C5898',
    foldColor: '#254A80',
    glyphColor: 'rgba(255,255,255,0.4)',
    labelColor: '#2C5898',
    labelUppercase: true,
    type: 'document',
  },
  docx: {
    color: '#2C5898',
    foldColor: '#254A80',
    glyphColor: 'rgba(255,255,255,0.4)',
    labelColor: '#2C5898',
    labelUppercase: true,
    type: 'document',
  },
  dwg: {
    type: 'vector',
  },
  dxf: {
    type: 'vector',
  },
  eot: {
    type: 'font',
  },
  eps: {
    type: 'vector',
  },
  exe: {
    type: 'settings',
  },
  flac: {
    type: 'audio',
  },
  flv: {
    type: 'video',
  },
  fnt: {
    type: 'font',
  },
  fodp: {
    type: 'presentation',
  },
  fods: {
    type: 'spreadsheet',
  },
  fodt: {
    type: 'document',
  },
  fon: {
    type: 'font',
  },
  gif: {
    type: 'image',
  },
  gz: {
    type: 'compressed',
  },
  htm: {
    type: 'code',
  },
  html: {
    type: 'code',
  },
  indd: {
    color: '#4B2B36',
    gradientOpacity: 0,
    labelColor: '#4B2B36',
    labelTextColor: '#FF408C',
    labelUppercase: true,
    foldColor: '#FF408C',
    radius: 2,
  },
  ini: {
    type: 'settings',
  },
  java: {
    type: 'code',
  },
  jpeg: {
    color: "#EF7D34", 
    glyphColor: "#FFFFF4", 
    labelColor: "#5A5ABC",   
    type: 'image',
  },
  jpg: {
    color: "#EF7D34", 
    glyphColor: "#FFFFF4", 
    labelColor: "#5A5ABC",     
    type: 'image',
  },
  js: {
    labelColor: '#F7DF1E',
    type: 'code',
  },
  json: {
    type: 'code',
  },
  jsx: {
    labelColor: '#00D8FF',
    type: 'code',
  },
  m4a: {
    type: 'audio',
  },
  m4v: {
    type: 'video',
  },
  max: {
    labelColor: '#5FB9AD',
    type: '3d',
  },
  md: {
    type: 'document',
  },
  mid: {
    type: 'audio',
  },
  mkv: {
    type: 'video',
  },
  mov: {
    type: 'video',
  },
  mp3: {
    type: 'audio',
  },
  mp4: {
    type: 'video',
  },
  mpeg: {
    type: 'video',
  },
  mpg: {
    type: 'video',
  },
  msg: {
    labelColor: "#0072C6", 
    type: "document", 
  }, 
  obj: {
    type: '3d',
  },
  odp: {
    type: 'presentation',
  },
  ods: {
    type: 'spreadsheet',
  },
  odt: {
    type: 'document',
  },
  ogg: {
    type: 'audio',
  },
  ogv: {
    type: 'video',
  },
  otf: {
    type: 'font',
  },
  pdf: {
    labelColor: '#D93831',
    type: 'acrobat',
  },
  php: {
    labelColor: '#8892BE',
    type: 'code',
  },
  pkg: {
    type: '3d',
  },
  plist: {
    type: 'settings',
  },
  png: {
    type: 'image',
  },
  ppt: {
    color: '#D14423',
    foldColor: '#AB381D',
    glyphColor: 'rgba(255,255,255,0.4)',
    labelColor: '#D14423',
    labelUppercase: true,
    type: 'presentation',
  },
  pptx: {
    color: '#D14423',
    foldColor: '#AB381D',
    glyphColor: 'rgba(255,255,255,0.4)',
    labelColor: '#D14423',
    labelUppercase: true,
    type: 'presentation',
  },
  pr: {
    type: 'video',
  },
  ps: {
    type: 'vector',
  },
  psd: {
    color: '#34364E',
    gradientOpacity: 0,
    labelColor: '#34364E',
    labelTextColor: '#31C5F0',
    labelUppercase: true,
    foldColor: '#31C5F0',
    radius: 2,
  },
  py: {
    labelColor: '#FFDE57',
    type: 'code',
  },
  rar: {
    type: 'compressed',
  },
  rb: {
    labelColor: '#BB271A',
    type: 'code',
  },
  rm: {
    type: 'video',
  },
  rtf: {
    type: 'document',
  },
  scss: {
    labelColor: '#C16A98',
    type: 'code',
  },
  sitx: {
    type: 'compressed',
  },
  skp: {
    type: '3d',
  },
  svg: {
    type: 'vector',
  },
  swf: {
    type: 'video',
  },
  sys: {
    type: 'settings',
  },
  tar: {
    type: 'compressed',
  },
  tex: {
    type: 'document',
  },
  tif: {
    type: 'image',
  },
  tiff: {
    type: 'image',
  },
  ts: {
    labelColor: '#3478C7',
    type: 'code',
  },
  ttf: {
    type: 'font',
  },
  txt: {
    type: 'document',
  },
  wav: {
    type: 'audio',
  },
  webm: {
    type: 'video',
  },
  wmv: {
    type: 'video',
  },
  woff: {
    type: 'font',
  },
  wpd: {
    type: 'document',
  },
  wps: {
    type: 'document',
  },
  xapk: {
    type: 'android',
    labelColor: '#3DDC84',
  },
  xlr: {
    type: 'spreadsheet',
  },
  xls: {
    color: '#1A754C',
    foldColor: '#16613F',
    glyphColor: 'rgba(255,255,255,0.4)',
    labelColor: '#1A754C',
    labelUppercase: true,
    type: 'spreadsheet',
  },
  xlsx: {
    color: '#1A754C',
    foldColor: '#16613F',
    glyphColor: 'rgba(255,255,255,0.4)',
    labelColor: '#1A754C',
    labelUppercase: true,
    type: 'spreadsheet',
  },
  yml: {
    type: 'code',
  },
  zip: {
    color: "#fee472",
    labelColor: "#fbc348",  
    type: 'compressed',
  },
  zipx: {
    color: "#fee472",
    labelColor: "#fbc348",  
    type: 'compressed',
  },
};