var notes = {
    'example':'this will peer inside of an HTML element so <a>tags will work</a>'
}
export default class model{
    constructor() {
        // We need a constructor...but in this case it isn't doing much
    }
    get_all_notes(){
        return notes
    }
}