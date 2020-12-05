// Common
import React from 'react';
import cx from 'classnames';

// Action Creators
import { formSetTags } from '../../store/actions/report.action';

// Hooks
import { useSelector, useDispatch } from 'react-redux'

// Styles
import styles from './styles.module.scss';

const isSelected = (list, uuid) => {
  if (!list || !list.length || !uuid) return false;
  return list.some(item => item.uuid === uuid)
};

const TagList = ({ tagList, className, isSelectList }) => {
  const { submitData: { tags: selectedTags } } = useSelector(state => state.report);
  const dispatch = useDispatch();

  if (!tagList || !tagList.length) return null;

  const handleTagClick = index => () => {
    if (!isSelectList) return

    if ((!index && !(index === 0)) || !tagList || !tagList.length) return;
    let selectedTagsUpdated;
    const isTagSelected = isSelected(selectedTags, tagList[index].uuid);

    if (isTagSelected) {
      const selectedIndex = selectedTags.indexOf(tagList[index])
      if (selectedIndex === -1) return

      const start = selectedTags.slice(0, selectedIndex)
      const end = selectedTags.slice(selectedIndex + 1)
      
      selectedTagsUpdated = [...start, ...end];
    } else {
      selectedTagsUpdated = [...selectedTags, tagList[index]]
    }

    dispatch(formSetTags(selectedTagsUpdated))
  }

  return (
    <ul className={cx(
      {
        [className]: className,
        [styles['tag-list']]: true,
        [styles['tag-list_select']]: isSelectList
      },
    )}>
      {tagList.map(({ name, uuid }, index) => {
        return (
          <li
            key={uuid}
            className={cx(
              styles['tag-list_item'], {
              [styles['tag-list_item-selected']]: isSelected(selectedTags, uuid)
            }
            )}
            onClick={handleTagClick(index)}
          >
            {name}
          </li>
        )
      }
      )}
    </ul>
  )
}

export default TagList;
