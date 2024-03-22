export default function todoDone(project, todo, box, item, task, t, d) {
    if (box.checked) {
        console.log("Checkbox is checked..");
        todo.done = 'yes';
        item.classList.add('done');
    } else {
        console.log("Checkbox is not checked..");
        todo.done = 'no'
        try {
            item.classList.remove('done');
        } catch {
            return;
        }
        
    }
}