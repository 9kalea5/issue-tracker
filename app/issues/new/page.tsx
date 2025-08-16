'use client'

import React from 'react';
import { Button, TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios'
import "easymde/dist/easymde.min.css";
import { useRouter } from 'next/navigation';

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const { register, control, handleSubmit } = useForm<IssueForm>();

  return (
    <form
      className='max-w-xl space-y-3'
      onSubmit={handleSubmit(async(data) => {
        await axios.post('/api/issues', data)
      })}
    >
      <TextField.Root
        placeholder="Enter title"
        {...register("title")} 
      >
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>


      <Controller
        name='description'
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder='Description' {...field} />
        )}
      />

      <Button>Submit New Issue</Button>
    </form>
  );
};

export default NewIssuePage;
