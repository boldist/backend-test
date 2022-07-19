import axios from "axios";

export async function getUser() {
    return await axios.get('http://localhost:5000');
}
