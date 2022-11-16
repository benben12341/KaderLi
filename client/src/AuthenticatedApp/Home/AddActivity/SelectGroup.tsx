import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {
  Rank,
  Role,
  Gender,
  Location
} from '../../../../../common/types/enums';
import { RoleConverter } from '../../../utils/converters/RoleConverter';
import { GenderConverter } from '../../../utils/converters/GenderConverter';
import { LocationConverter } from '../../../utils/converters/LocationConverter';
import { RankConverter } from '../../../utils/converters/RankConverter';
import { Stack } from '@mui/system';

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

const SelectGroup = () => {
  const theme = useTheme();
  //   const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value }
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <Stack spacing={3} direction={'column'} justifyContent='center' padding={3}>
      <FormControl sx={{ m: 1, width: 300 }}>
        <Select
          label='דרגה'
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label='דרגה' />}
          MenuProps={MenuProps}>
          {Object.keys(RankConverter).map(type => (
            <MenuItem key={type} value={parseInt(type)}>
              {RankConverter[parseInt(type)]}
            </MenuItem>
          ))}
        </Select>
        <Select
          label='תפקיד'
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label='תפקיד' />}
          MenuProps={MenuProps}>
          {Object.keys(RoleConverter).map(type => (
            <MenuItem key={type} value={parseInt(type)}>
              {RoleConverter[parseInt(type)]}
            </MenuItem>
          ))}
        </Select>
        <Select
          label='מין'
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label='מין' />}
          MenuProps={MenuProps}>
          {Object.keys(GenderConverter).map(type => (
            <MenuItem key={type} value={parseInt(type)}>
              {GenderConverter[parseInt(type)]}
            </MenuItem>
          ))}
        </Select>
        <Select
          label='מיקום'
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label='מיקום' />}
          MenuProps={MenuProps}>
          {Object.keys(LocationConverter).map(type => (
            <MenuItem key={type} value={parseInt(type)}>
              {LocationConverter[parseInt(type)]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default SelectGroup;
