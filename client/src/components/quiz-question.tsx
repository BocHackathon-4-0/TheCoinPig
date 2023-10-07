import { TQuestionOption } from "@/shared/types";
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
} from "@mui/material";
import { useEffect, useState } from "react";

type TQuizQuestionProps = {
    question: string;
    options: TQuestionOption[];
    onChange: (selectedId: number) => void;
};

export default function QuizQuestion({
    question,
    options,
    onChange,
}: TQuizQuestionProps) {
    const [selectedId, setSelectedId] = useState<number>();

    useEffect(() => {
        if (selectedId === undefined) return;
        onChange(selectedId);
    }, [selectedId]);

    return (
        <FormControl
            onChange={(e) =>
                setSelectedId(Number((e.target as HTMLInputElement).value))
            }
        >
            <FormLabel sx={{ fontSize: 25 }}>{question}</FormLabel>
            <RadioGroup name="radio-buttons-group">
                {options.map((option) => (
                    <FormControlLabel
                        checked={option.id === selectedId}
                        value={option.id}
                        control={<Radio />}
                        label={option.text}
                        className="text-gray-700"
                        sx={{ fontSize: 20 }}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
}
