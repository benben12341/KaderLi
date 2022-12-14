import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { RoleConverter } from '../../../utils/converters/RoleConverter';
import { GenderConverter } from '../../../utils/converters/GenderConverter';
import { LocationConverter } from '../../../utils/converters/LocationConverter';
import { RankConverter } from '../../../utils/converters/RankConverter';
import { Stack } from '@mui/system';
import { useActivity } from '../../../providers/ActivityProvider';
import { InputLabel } from '@mui/material';
import { MenuItem } from '@mui/material';

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
  const {
    rank,
    setRank,
    location,
    setLocation,
    role,
    setRole,
    setGender,
    gender
  } = useActivity();

  const handleGenderChange = (event: SelectChangeEvent<typeof gender>) => {
    const {
      target: { value }
    } = event;
    setGender(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const handleLocationChange = (event: SelectChangeEvent<typeof location>) => {
    const {
      target: { value }
    } = event;
    setLocation(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const handleRoleChange = (event: SelectChangeEvent<typeof role>) => {
    const {
      target: { value }
    } = event;
    setRole(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const handleRankChange = (event: SelectChangeEvent<typeof rank>) => {
    const {
      target: { value }
    } = event;
    setRank(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <Stack spacing={1} direction={'column'} justifyContent='center' padding={3}>
      <InputLabel>????????</InputLabel>
      <Select
        variant='outlined'
        label='????????'
        multiple
        value={rank}
        onChange={handleRankChange}
        input={<OutlinedInput label='????????' />}
        MenuProps={MenuProps}>
        {Object.keys(RankConverter).map(type => (
          <MenuItem key={type} value={parseInt(type)}>
            {RankConverter[parseInt(type)]}
          </MenuItem>
        ))}
      </Select>
      <InputLabel>??????????</InputLabel>
      <Select
        label='??????????'
        multiple
        value={role}
        onChange={handleRoleChange}
        input={<OutlinedInput label='??????????' />}
        MenuProps={MenuProps}>
        {Object.keys(RoleConverter).map(type => (
          <MenuItem key={type} value={parseInt(type)}>
            {RoleConverter[parseInt(type)]}
          </MenuItem>
        ))}
      </Select>
      <InputLabel>??????</InputLabel>
      <Select
        label='??????'
        multiple
        value={gender}
        onChange={handleGenderChange}
        input={<OutlinedInput label='??????' />}
        MenuProps={MenuProps}>
        {Object.keys(GenderConverter).map(type => (
          <MenuItem key={type} value={parseInt(type)}>
            {GenderConverter[parseInt(type)]}
          </MenuItem>
        ))}
      </Select>
      <InputLabel>??????????</InputLabel>
      <Select
        label='??????????'
        multiple
        value={location}
        onChange={handleLocationChange}
        input={<OutlinedInput label='??????????' />}
        MenuProps={MenuProps}>
        {Object.keys(LocationConverter).map(type => (
          <MenuItem key={type} value={parseInt(type)}>
            {LocationConverter[parseInt(type)]}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );
};

export default SelectGroup;
