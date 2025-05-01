import { useState } from 'react';
import Icon from '../Icon';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from '../ui/dialog';
import { Input } from '../ui/input';

function SearchButton() {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="flex lg:hidden border-none shadow-none"
        >
          <Icon name="search" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] bg-surface-light-primary border-0 rounded-small">
        {/* <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader> */}

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              type="search"
              id="search"
              value={searchValue}
              onChange={handleInputChange}
              placeholder="Search"
              className="col-span-4 text-content-dark placeholder:text-placeholder border-border-light outline-none active:outline-none rounded-small shadow-none focus-visible:ring-0 focus-visible:border-border-light selection:bg-surface-highlight"
              autoFocus
            />
          </div>
        </div>

        <DialogFooter>
          <Button
            type="submit"
            className="text-content-dark hover:text-content-light active:text-content-light bg-surface-light-primary hover:bg-accent-secondary active:bg-accent-primary border border-border-light rounded-small shadow-none hover:shadow-primary active:shadow-none"
          >
            Search
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default SearchButton;
