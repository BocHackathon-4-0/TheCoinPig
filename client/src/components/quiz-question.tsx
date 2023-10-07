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
    onChange: (selectedId: string) => void;
};

export default function QuizQuestion({
    question,
    options,
    onChange,
}: TQuizQuestionProps) {
    const [selectedId, setSelectedId] = useState<string>();

    useEffect(() => {
        if (selectedId === undefined) return;
        onChange(selectedId);
    }, [selectedId]);

    return (
        <FormControl
            onChange={(e) =>
                setSelectedId((e.target as HTMLInputElement).value)
            }
        >
            <FormLabel>{question}</FormLabel>
            <RadioGroup name="radio-buttons-group">
                {options.map((option) => (
                    <FormControlLabel
                        checked={option.id === selectedId}
                        value={option.id}
                        control={<Radio />}
                        label={option.text}
                        className="text-gray-700"
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
}
