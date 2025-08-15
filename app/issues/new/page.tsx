'use client'

import { Button, TextArea, TextField } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

<TextField.Root placeholder="Search the docs…">
  <TextField.Slot>
    <MagnifyingGlassIcon height="16" width="16" />
  </TextField.Slot>
</TextField.Root>

import React from 'react';

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root>
            <TextField.Slot>
                <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
            <input placeholder="Search..." className="rt-TextFieldInput" />
        </TextField.Root>
        <TextArea placeholder='Description'/>
        <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
