import { Box, FormControl, MenuItem, Select, Stack, TextField } from "@mui/material";
import { useActivity } from "../../../providers/ActivityProvider"
import { ActivityTypeConverter } from "../../../utils/ActivityTypeConverter";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250
        }
    }
};

const MoreInformation = () => {
    const { description, setDescription } = useActivity();
    const { type, setType } = useActivity();

    return (
        <Stack spacing={3} direction={'column'} justifyContent='center' padding={3}>
            <Select
                label='סוג תורנות'
                value={type}
                onChange={(event) => setType(event.target.value)}
                MenuProps={MenuProps}>
                {
                    Object.keys(ActivityTypeConverter).map(type => (
                        <MenuItem key={type} value={parseInt(type)}>
                            {ActivityTypeConverter[parseInt(type)]}
                        </MenuItem>
                    ))
                }
            </Select>

            <TextField
                label='תיאור'
                multiline
                variant="outlined"
                onChange={(event) => setDescription(event.target.value)}
                defaultValue={description}
            >
            </TextField>

        </Stack>
    );
}

export default MoreInformation;