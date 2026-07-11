import type ElementSearchSchema from "#shared/types/schemas/element-search-schema";
export default interface ElementSearchEmits {
    doSearch: [payload: ElementSearchSchema]
}