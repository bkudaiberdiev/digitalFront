import axios from "axios"
export async function getCitiesReq() {
	return axios.get("http://localhost:8000/cities")

}