import css from './Filter.module.css';

const Filter = query => {
  const handleSearch = evt => {
    evt.preventDefault();
    const searchQuery = evt.target.elements.location.value;
    const ac = evt.target.elements.ac.checked;
    console.log('evt', evt);
    console.log('searchQuery', searchQuery);
    console.log('ac', ac);
    const formData = new FormData(evt.target);
    console.log('formData', formData);
  };
  return (
    <div>
      <form action="" onSubmit={handleSearch}>
        <label htmlFor="location"></label>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="location"
        />
        <input className={css.checkboxCustom} type="checkbox" id="ac" />
        <label htmlFor="ac" className={css.checkboxCustomLabel}>
          AC
        </label>
        <input className={css.checkboxCustom} type="checkbox" id="kitchen" />
        <label htmlFor="kitchen" className={css.checkboxCustomLabel}>
          kitchen
        </label>

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Filter;
