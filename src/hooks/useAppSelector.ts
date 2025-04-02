import { useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState } from "@/store/profileStore";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
