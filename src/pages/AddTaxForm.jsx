import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./AddTaxForm.css";

const api =
[{"id":14864,"tab_id":3202,"name":"Recurring Item","amount":12.0,"amount_type":"fixed","allow_quantity":null,"deleted_at":null,"required":false,"created_at":"2018-07-02T14:11:00.305Z","updated_at":"2018-06-17T19:19:42.304Z","type":"TabItem","position":1,"anchor":null,"parent_id":null,"catalog_object_id":null,"description":null,"available_quantity":null,"hidden":false,"options":{"recurring":{"enabled":true,"options":{"ends":{"type":"never"},"start":{"type":"first_payment"},"repeatInterval":"P1M"}}},"tsv":"'item':2 'recur':1","quantity_sold":2,"amount_sold":24.0,"total_buyers":1,"quantity_refunded":0,"amount_discounted":0.0,"amount_refunded":0.0,"net_amount":24.0,"net_quantity":2,"subcategory":null,"images":[]},{"id":14865,"tab_id":3202,"name":"Jasinthe Bracelet","amount":26.0,"amount_type":"fixed","allow_quantity":null,"deleted_at":null,"required":false,"created_at":"2018-07-02T14:11:00.309Z","updated_at":"2018-08-11T03:08:39.841Z","type":"TabItem","position":1,"anchor":null,"parent_id":14866,"catalog_object_id":8463,"description":null,"available_quantity":8,"hidden":false,"options":{"makeAvailableQuantityPublic":false},"tsv":"'bracelet':2 'jasinth':1","quantity_sold":11,"amount_sold":286.0,"total_buyers":7,"quantity_refunded":0,"amount_discounted":0.0,"amount_refunded":0.0,"net_amount":286.0,"net_quantity":11,"subcategory":null,"category":{"id":14866,"name":"Bracelets","options":{}},"images":[{"id":5572,"upload_path":"uploads/image/image_file/716/jasinthe_bracelet.jpg","metadata":{},"url":"https://images.cheddarcdn.com/eyJidWNrZXQiOiJjaGVkZGFyLXVwLXJldmlldyIsImtleSI6InVwbG9hZHMvaW1hZ2UvaW1hZ2VfZmlsZS83MTYvamFzaW50aGVfYnJhY2VsZXQuanBnIiwib3V0cHV0Rm9ybWF0IjoianBlZyIsImVkaXRzIjp7ImZsYXR0ZW4iOnsiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1fX19fQ=="}]},{"id":14867,"tab_id":3202,"name":"Jasinthe Bracelet","amount":26.0,"amount_type":"fixed","allow_quantity":null,"deleted_at":null,"required":false,"created_at":"2018-07-02T14:11:00.317Z","updated_at":"2018-07-10T13:24:53.733Z","type":"TabItem","position":2,"anchor":null,"parent_id":14866,"catalog_object_id":8463,"description":null,"available_quantity":19,"hidden":false,"options":{"makeAvailableQuantityPublic":true},"tsv":"'bracelet':2 'jasinth':1","quantity_sold":1,"amount_sold":26.0,"total_buyers":1,"quantity_refunded":0,"amount_discounted":5.2,"amount_refunded":0.0,"net_amount":20.8,"net_quantity":1,"subcategory":null,"category":{"id":14866,"name":"Bracelets","options":{}},"images":[{"id":5571,"upload_path":"uploads/image/image_file/1742/jasinthe_bracelet.jpg","metadata":{},"url":"https://images.cheddarcdn.com/eyJidWNrZXQiOiJjaGVkZGFyLXVwLXJldmlldyIsImtleSI6InVwbG9hZHMvaW1hZ2UvaW1hZ2VfZmlsZS8xNzQyL2phc2ludGhlX2JyYWNlbGV0LmpwZyIsIm91dHB1dEZvcm1hdCI6ImpwZWciLCJlZGl0cyI6eyJmbGF0dGVuIjp7ImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NX19fX0="}]},{"id":14868,"tab_id":3202,"name":"Recurring Item with questions","amount":12.0,"amount_type":"fixed","allow_quantity":null,"deleted_at":null,"required":false,"created_at":"2018-07-02T14:11:00.323Z","updated_at":"2018-07-02T14:10:25.296Z","type":"TabItem","position":2,"anchor":null,"parent_id":null,"catalog_object_id":null,"description":null,"available_quantity":null,"hidden":false,"options":{"recurring":{"enabled":true,"options":{"ends":{"type":"payment_count","payment_count":5},"start":{"type":"first_payment"},"repeatInterval":"P1M"}},"makeAvailableQuantityPublic":false},"tsv":"'item':2 'question':4 'recur':1","quantity_sold":0,"amount_sold":0.0,"total_buyers":0,"quantity_refunded":0,"amount_discounted":0.0,"amount_refunded":0.0,"net_amount":0.0,"net_quantity":0,"subcategory":null,"images":[]},{"id":14869,"tab_id":3202,"name":"Zero amount item with questions","amount":0.0,"amount_type":"fixed","allow_quantity":null,"deleted_at":null,"required":false,"created_at":"2018-07-02T14:11:00.334Z","updated_at":"2018-07-02T14:09:09.267Z","type":"TabItem","position":3,"anchor":null,"parent_id":null,"catalog_object_id":null,"description":null,"available_quantity":null,"hidden":false,"options":{"makeAvailableQuantityPublic":false},"tsv":"'amount':2 'item':3 'question':5 'zero':1","quantity_sold":2,"amount_sold":0.0,"total_buyers":2,"quantity_refunded":0,"amount_discounted":0.0,"amount_refunded":0.0,"net_amount":0.0,"net_quantity":2,"subcategory":null,"images":[]},{"id":14870,"tab_id":3202,"name":"Inspire Bracelet","amount":32.0,"amount_type":"fixed","allow_quantity":null,"deleted_at":null,"required":false,"created_at":"2018-07-02T14:11:00.348Z","updated_at":"2018-06-27T16:47:21.731Z","type":"TabItem","position":3,"anchor":null,"parent_id":14866,"catalog_object_id":8462,"description":null,"available_quantity":0,"hidden":false,"options":{},"tsv":"'bracelet':2 'inspir':1","quantity_sold":0,"amount_sold":0.0,"total_buyers":0,"quantity_refunded":0,"amount_discounted":0.0,"amount_refunded":0.0,"net_amount":0.0,"net_quantity":0,"subcategory":null,"category":{"id":14866,"name":"Bracelets","options":{}},"images":[{"id":5570,"upload_path":"uploads/image/image_file/715/inspire_bracelet.jpg","metadata":{},"url":"https://images.cheddarcdn.com/eyJidWNrZXQiOiJjaGVkZGFyLXVwLXJldmlldyIsImtleSI6InVwbG9hZHMvaW1hZ2UvaW1hZ2VfZmlsZS83MTUvaW5zcGlyZV9icmFjZWxldC5qcGciLCJvdXRwdXRGb3JtYXQiOiJqcGVnIiwiZWRpdHMiOnsiZmxhdHRlbiI6eyJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTV9fX19"}]},{"id":14872,"tab_id":3202,"name":"Normal item with questions","amount":55.0,"amount_type":"fixed","allow_quantity":null,"deleted_at":null,"required":false,"created_at":"2018-07-02T14:11:00.365Z","updated_at":"2018-07-02T14:09:46.143Z","type":"TabItem","position":4,"anchor":null,"parent_id":null,"catalog_object_id":null,"description":null,"available_quantity":null,"hidden":false,"options":{"makeAvailableQuantityPublic":false},"tsv":"'item':2 'normal':1 'question':4","quantity_sold":2,"amount_sold":110.0,"total_buyers":2,"quantity_refunded":0,"amount_discounted":22.0,"amount_refunded":0.0,"net_amount":88.0,"net_quantity":2,"subcategory":null,"images":[]},{"id":14873,"tab_id":3202,"name":"normal item ","amount":20.0,"amount_type":"fixed","allow_quantity":null,"deleted_at":null,"required":false,"created_at":"2018-07-02T14:11:00.378Z","updated_at":"2018-06-21T15:38:07.112Z","type":"TabItem","position":5,"anchor":null,"parent_id":null,"catalog_object_id":null,"description":null,"available_quantity":null,"hidden":false,"options":{},"tsv":"'item':2 'normal':1","quantity_sold":1,"amount_sold":20.0,"total_buyers":1,"quantity_refunded":0,"amount_discounted":4.0,"amount_refunded":0.0,"net_amount":16.0,"net_quantity":1,"subcategory":null,"images":[]}]


const AddTaxForm = () => {
  const spellingToNumberMap = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
  };

  const [appliedTo, setAppliedTo] = useState('some');
  const [selectedItems, setSelectedItems] = useState([]);
  const [itemsGroupedByCategory, setItemsGroupedByCategory] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const grouped = api.reduce((acc, item) => {
      const category = item.category ? item.category.name : '';
      if (!acc[category]) acc[category] = [];
      acc[category].push(item);
      return acc;
    }, {});
    setItemsGroupedByCategory(grouped);
  }, [api]);

  useEffect(() => {
    if (appliedTo === 'all') {
      setSelectedItems(api.map(item => item.id));
    } else {
      setSelectedItems([]);
    }
  }, [appliedTo, api]);

  const handleCategoryChange = (category) => {
    const isChecked = itemsGroupedByCategory[category].every(item => selectedItems.includes(item.id));
    const categoryItems = itemsGroupedByCategory[category].map(item => item.id);

    if (isChecked) {
      setSelectedItems(prevSelectedItems => prevSelectedItems.filter(item => !categoryItems.includes(item)));
    } else {
      setSelectedItems(prevSelectedItems => [...prevSelectedItems, ...categoryItems]);
    }
  };

  const handleItemChange = (itemId) => {
    setSelectedItems(prevSelectedItems => {
      if (prevSelectedItems.includes(itemId)) {
        return prevSelectedItems.filter(id => id !== itemId);
      } else {
        return [...prevSelectedItems, itemId];
      }
    });
  };

  const isCategoryChecked = (category) => {
    return itemsGroupedByCategory[category]?.every(item => selectedItems.includes(item.id)) ?? false;
  };

  const isItemChecked = (itemId) => {
    return selectedItems.includes(itemId);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredItems = (items) => {
    if (!searchTerm) return items;
    return items.filter(item => item.name.toLowerCase().includes(searchTerm));
  };

  const onSubmit = (values) => {
    console.log(`applied_to: "${values.appliedTo}"`);
    console.log(`applicable_items: [${selectedItems.join(',')}]`);
    console.log(`name: ${values.spelling}`);
    console.log(`rate: ${values.number / 100}`);
  };

  const validationSchema = Yup.object({
    spelling: Yup.string().required('Number in words is required'),
    number: Yup.number().required('Number is required').positive('Number must be positive'),
    appliedTo: Yup.string().oneOf(['some', 'all'], 'Invalid option').required('Required'),
  });

  return (
    <>
      <div className='main-container'>
        <Formik
          initialValues={{ spelling: '', number: '', appliedTo: 'some' }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form className='form'>
              <div className='form-title'>
                <h3>Add Tax</h3>
                <p>X</p>
              </div>

              <div className='number-input-container'>
                <Field
                  type="text"
                  id="spelling"
                  name="spelling"
                  placeholder="Type the number in words"
                  onChange={(e) => {
                    const value = e.target.value.toLowerCase();
                    setFieldValue('spelling', value);
                    if (spellingToNumberMap[value] !== undefined) {
                      setFieldValue('number', spellingToNumberMap[value]);
                    } else {
                      setFieldValue('number', '');
                    }
                  }}
                  value={values.spelling}
                  className="spelling"
                />
                <ErrorMessage name="spelling" component="div" />
                <Field
                  type="text"
                  id="number"
                  name="number"
                  readOnly
                  placeholder="Number"
                  value={values.number}
                  className="number"
                />
                <ErrorMessage name="number" component="div" />
              </div>
              <div>
                <div className="checkbox-apply-label">
                  <Field
                    type="checkbox"
                    name="appliedTo"
                    value="all"
                    id="allItems"
                    checked={values.appliedTo === 'all'}
                    onChange={() => {
                      setFieldValue('appliedTo', 'all');
                      setAppliedTo('all');
                    }}
                    className="checkbox-apply"
                  />
                  <label htmlFor="allItems">Apply to all items in collection</label>
                </div>
                <div className="checkbox-apply-label">
                  <Field
                    type="checkbox"
                    name="appliedTo"
                    value="some"
                    id="specificItems"
                    checked={values.appliedTo === 'some'}
                    onChange={() => {
                      setFieldValue('appliedTo', 'some');
                      setAppliedTo('some');
                    }}
                    className="checkbox-apply"
                  />
                  <label htmlFor="specificItems">Apply to specific items</label>
                </div>
              </div>
              <hr style={{ border: '1px solid gray', margin: '20px 0' }} />
              {values.appliedTo === 'some' && (
                <div>
                  <input
                    type="text"
                    placeholder="🔍 Search items"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className='search-input'
                  />
                 <div>
                  {Object.keys(itemsGroupedByCategory).map(category => {
                    const categoryItems = filteredItems(itemsGroupedByCategory[category] || []);
                    if (category === 'Uncategorized') {
                      return (
                        <div key={category}>
                          <div style={{ backgroundColor: '#f0f0f0', padding: '5px' }}>
                            <input
                              type="checkbox"
                              checked={categoryItems.every(item => selectedItems.includes(item.id))}
                              onChange={() => handleCategoryChange(category)}
                            />
                            {category}
                          </div>
                          {categoryItems.map(item => (
                            <div key={item.id} style={{ marginLeft: '20px' }}>
                              <input
                                type="checkbox"
                                checked={isItemChecked(item.id)}
                                onChange={() => handleItemChange(item.id)}
                              />
                              {item.name}
                            </div>
                          ))}
                        </div>
                      );
                    }
                    if (categoryItems.length === 0) return null;
                    return (
                      <div key={category}>
                        <div style={{ backgroundColor: '#f0f0f0', padding: '5px' }}>
                          <input
                            type="checkbox"
                            checked={isCategoryChecked(category)}
                            onChange={() => handleCategoryChange(category)}
                          />
                          {category}
                        </div>
                        <div style={{ marginLeft: '20px' }}>
                          {categoryItems.map(item => (
                            <div key={item.id}>
                              <input
                                type="checkbox"
                                checked={isItemChecked(item.id)}
                                onChange={() => handleItemChange(item.id)}
                              />
                              {item.name}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
<hr style={{ border: '1px solid gray', margin: '20px 0' }} />

            <button type="submit" className='submit-button'>
              Apply tax to {values.appliedTo === 'all' ? api.length : selectedItems.length} item(s)
            </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default AddTaxForm;
