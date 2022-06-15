import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToRestaurants } from "../routes/coordinator";

export const useUnprotectedPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (token) {
            goToRestaurants(navigate)
        }
    })
}