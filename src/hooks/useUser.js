import { createUser, getUsers, deleteUser, getUser, updateUser } from "../services/usersServices";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers, editUser, change, deleteUserRedux } from "../store/slices/user/userSlice";

export const useUser = () => {
    const {users} = useSelector((state) => state.user);
    const dispach = useDispatch();

    const habdlerGetUser = async (id) => {
        try {
            const response = await getUser(id)
            if (response.status === 200) {
                const { data } = response
                return data.status.data
            }
        } catch (error) {
            throw error
        }
    }

    const handlerGetUsers = async () => {
        try {
            const response = await getUsers()
            if (response.status === 200) {
                dispach(loadUsers(response.data));
                sessionStorage.setItem("users", JSON.stringify(data.status.data))
            }
        } catch (error) {
            throw error
        }
    }

    const handlerCreateUser = async (user) => {
        try {
            const response = await createUser(user)
            if (response.status === 200) {
                const { data } = response
                dispach(loadUsers(data.status.data))
            }
        } catch (error) {
            throw error
        }
    }

    const handlerUpdateUser = async (user) => {
        try {
            const response = await updateUser(user)
            if (response.status === 200) {
                const { data } = response
                dispach(editUser(data.status.data))
            }
        } catch (error) {
            throw error
        }
    }

    const handlerDeleteUser = async (id) => {
        try {
            const response = await deleteUser(id)
            if (response.status === 200) {
                const { data } = response
                dispach(deleteUserRedux(id))
            }
        } catch (error) {
            throw error
        }
    }
    return { users, handlerGetUsers, handlerCreateUser, handlerUpdateUser, handlerDeleteUser, habdlerGetUser }
}