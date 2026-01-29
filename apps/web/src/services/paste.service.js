import api from "@/lib/axios";
export async function createPaste(data) {
    const res = await api.post("/api/pastes", data);
    return res.data;
}
export async function fetchPaste(id) {
    const res = await api.get(`/api/pastes/${id}`);
    return res.data;
}
