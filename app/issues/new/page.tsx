'use client'

import { Button, TextField } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

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
        <SimpleMDE placeholder='Description'/>
        <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
