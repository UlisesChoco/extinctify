const BASE_URL: string = "https://extinct-api.herokuapp.com/api/v1";

export async function api(
    endpoint: string
) {
    const url: string = BASE_URL + endpoint;

    return await fetch(url, { method: "GET" });
}