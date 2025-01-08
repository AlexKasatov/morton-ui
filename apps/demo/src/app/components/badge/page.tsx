import type { NextPage } from "next";
import {Badge} from "@morton-ui/components/badge";

const BadgeComponentPage: NextPage = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <section className='flex justify-center flex-col gap-6'>
        <div className='flex flex-row gap-6 items-center'>
          <Badge>Label</Badge>
          <Badge size='md'>Label</Badge>
          <Badge size='lg'>Label</Badge>
        </div>
        <div className='flex flex-row gap-6 items-center'>
          <Badge color='error'>Label</Badge>
          <Badge color='error' size='md'>Label</Badge>
          <Badge color='error' size='lg'>Label</Badge>
        </div>
        <div className='flex flex-row gap-6 items-center'>
          <Badge color='warning'>Label</Badge>
          <Badge color='warning' size='md'>Label</Badge>
          <Badge color='warning' size='lg'>Label</Badge>
        </div>
        <div className='flex flex-row gap-6 items-center'>
          <Badge color='success'>Label</Badge>
          <Badge color='success' size='md'>Label</Badge>
          <Badge color='success' size='lg'>Label</Badge>
        </div>
        <div className='flex flex-row gap-6 items-center'>
          <Badge color='brand'>Label</Badge>
          <Badge color='brand' size='md'>Label</Badge>
          <Badge color='brand' size='lg'>Label</Badge>
        </div>
      </section>
    </div>
  );
};

export default BadgeComponentPage;
