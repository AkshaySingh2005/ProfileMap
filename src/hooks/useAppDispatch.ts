import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store/profileStore";

export const useAppDispatch: () => AppDispatch = useDispatch;
