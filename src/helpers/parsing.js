import { DOCUMENTS_EXTENSIONS_LIST } from '../constants'

export const isFileExt = ext => DOCUMENTS_EXTENSIONS_LIST.some(docExt => docExt === ext);
