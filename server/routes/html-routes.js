
export default function get(app) {

    app.get('/', (req, res) => {
        res.send('Hello World, Inside')
    });
}