const getDb = () => localStorage.getItem('courses');

const updateDb = (myCourses) => JSON.stringify(localStorage.setItem('courses', myCourses));

const addToDB = (id, title) => {
    const existsDb = getDb();
    let dbObject = {};
    if (existsDb) {
        dbObject = JSON.parse(existsDb);
        dbObject[id] = title;
    } else {
        dbObject[id] = title;
    }
    updateDb(dbObject);
}

const deleteItem = (id, title) => {
    const existsDb = getDb();

}