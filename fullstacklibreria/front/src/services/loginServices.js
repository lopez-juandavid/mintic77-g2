import httpClient from "./httpClient";

const END_POINT = "/api/customers";

const getAll = () => httpClient.get(END_POINT);
const getByCedula = (cedula) => httpClient.get(`${END_POINT}/${cedula}`);
const getByCedulaPassword = (cedula, password) => httpClient.get(`${END_POINT}/${cedula}/${password}`);
const insert = (customer) => httpClient.post(`${END_POINT}`, customer);
const deleteByCedula = (cedula) => httpClient.delete(`${END_POINT}/${cedula}`);
const updateByCedula = (cedula, customer) => httpClient.put(`${END_POINT}/${cedula}`, customer);

export {
    getAll,
    getByCedula,
    getByCedulaPassword,
    insert,
    deleteByCedula,
    updateByCedula
}