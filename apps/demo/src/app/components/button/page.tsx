import type { NextPage } from "next";
import { Button } from "@morton-ui/components/button";
import { StarIcon } from "../../../lib/icons";

const ButtonComponentPage: NextPage = () => {
  return (
    <section className='container mx-auto flex items-center justify-center px-4'>
      <div className='flex items-start justify-center flex-col min-h-screen gap-12'>
        <div className='flex justify-self-start items-center gap-5 flex-wrap'>
          <Button color='primary' size='md'>Button CTA</Button>
          <Button color='primary' iconLeft={<StarIcon/>} size='lg'>Button CTA</Button>
          <Button color='primary' iconRight={<StarIcon/>} size='xl'>Button CTA</Button>
          <Button color='primary' size='2xl'>Button CTA</Button>
          <Button color='primary' iconButtonSize='2xl'><StarIcon/></Button>
        </div>
        <div className='flex items-center gap-5 flex-wrap'>
          <Button color='secondary' size='md'>Button CTA</Button>
          <Button color='secondary' iconLeft={<StarIcon/>} size='lg'>Button CTA</Button>
          <Button color='secondary' iconRight={<StarIcon/>} size='xl'>Button CTA</Button>
          <Button color='secondary' size='2xl'>Button CTA</Button>
          <Button color='secondary' iconButtonSize='2xl'><StarIcon/></Button>
        </div>
        <div className='flex items-center gap-5 flex-wrap'>
          <Button color='tertiary' size='md'>Button CTA</Button>
          <Button color='tertiary' iconLeft={<StarIcon/>} size='lg'>Button CTA</Button>
          <Button color='tertiary' iconRight={<StarIcon/>} size='xl'>Button CTA</Button>
          <Button color='tertiary' size='2xl'>Button CTA</Button>
          <Button color='tertiary' iconButtonSize='2xl'><StarIcon/></Button>
        </div>
        <div className='flex justify-start items-center gap-5 flex-wrap'>
          <Button color='linkColor'>Button CTA</Button>
          <Button color='linkColor' iconLeft={<StarIcon/>}>Button CTA</Button>
          <Button color='linkColor' iconRight={<StarIcon/>}>Button CTA</Button>
          <Button color='linkColor'>Button CTA</Button>
          <Button color='linkColor'><StarIcon/></Button>
        </div>
        <div className='flex gap-5 flex-wrap justify-self-start'>
          <Button color='linkGray'>Button CTA</Button>
          <Button color='linkGray' iconLeft={<StarIcon/>}>Button CTA</Button>
          <Button color='linkGray' iconRight={<StarIcon/>}>Button CTA</Button>
          <Button color='linkGray'>Button CTA</Button>
          <Button color='linkGray'><StarIcon/></Button>
        </div>
        <div className='flex items-center gap-5 flex-wrap'>
          <Button color='destructive' size='md'>Button CTA</Button>
          <Button color='destructive' iconLeft={<StarIcon/>} size='lg'>Button CTA</Button>
          <Button color='destructive' iconRight={<StarIcon/>} size='xl'>Button CTA</Button>
          <Button color='destructive' size='2xl'>Button CTA</Button>
          <Button color='destructive' iconButtonSize='2xl'><StarIcon/></Button>
        </div>
      </div>
    </section>
  );
};

export default ButtonComponentPage;

