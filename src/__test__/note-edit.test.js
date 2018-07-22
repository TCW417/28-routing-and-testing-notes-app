import React from 'react';
import {
  configure, mount, shallow, 
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EditNote from '../components/note-edit/note-edit';

configure({ adapter: new Adapter() });

describe('EditNote testing', () => {
  let form;

  beforeEach(() => {
    form = mount(<EditNote />);
  });

  afterEach(() => {
    form.unmount();
  });

  test('constructor initial state. not editing', () => {
    expect(form.state('title')).toEqual('');
    expect(form.state('content')).toEqual('');
    expect(form.state('editing')).toBe(false);
    expect(form.state('cancelled')).toBe(false);
  });

  test('constructor initial state. editing', () => {
    const mockNote = {
      title: 'fake', content: 'A fake note', _id: '1234', createdOn: new Date(),
    };
    form = mount(<EditNote mode="edit" note={mockNote}/>);
    expect(form.state('title')).toEqual('fake');
    expect(form.state('content')).toEqual('A fake note');
    expect(form.state('editing')).toBe(true);
    expect(form.state('cancelled')).toBe(false);
  });

  test('For selectable by class .note-edit', () => {
    expect(shallow(<EditNote />).is('.note-edit')).toBe(true);
  });

  test('Mount in DOM', () => {
    expect(form.find('.note-edit')).toHaveLength(1);
  });
});
