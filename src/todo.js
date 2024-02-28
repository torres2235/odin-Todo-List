export class todoItem {
    constructor(title, desc, due, priority, note, checkList) {
        this.title = title;
        this.desc = desc;
        this.due = due;
        this.priority = priority;
        this.note = note;
        this.checkList = checkList;
    }
}



export default function todoFunc() {
    console.log("todo function");
}