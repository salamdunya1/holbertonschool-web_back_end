/* eslint-disable  */
export default function getListStudentsIds(students) {
    if (Array.isArray(students)) {
        return students.map((items) => items.id);
    }

    return [];
}
