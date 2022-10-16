import React, { memo } from 'react';
import { FormikProps, FormikValues } from 'formik';
import { get } from 'lodash';

import { ReactComponent as DeleteIcon } from 'assets/icons/delete.svg';
import FormField from 'components/formik/field';
import CheckBox from 'components/checkbox';
import { TableKeys, Table } from 'core/roadmap';

import './table-row.scss';

interface TableRowProps {
  formik: FormikProps<FormikValues>;
  item: Table;
  remove(originIndex: number): void;
}

const TableRow: React.FunctionComponent<TableRowProps> =
  memo(
    ({
      formik,
      item,
      remove,
    }) => {
      const originIndex = get(item, TableKeys.originIndex);

      return (
        <>
          <div className="table-row__column">
            <FormField
              formik={formik}
              name={`${originIndex}.${TableKeys.title}`}
              placeholder="Title"
              fullWidth
            />
          </div>

          <div className="table-row__column">
            <FormField
              formik={formik}
              name={`${originIndex}.${TableKeys.author}`}
              placeholder="Author"
              fullWidth
            />
          </div>

          <div className="table-row__column">
            <FormField
              formik={formik}
              name={`${originIndex}.${TableKeys.date}`}
              fieldType="datePicker"
              isFormView
            />
          </div>

          <div className="table-row__column">
            <FormField
              formik={formik}
              name={`${originIndex}.${TableKeys.rating}`}
              placeholder="Rating"
              fullWidth
            />
          </div>

          <div className="table-row__column">
            <CheckBox
              formik={formik}
              name={`${originIndex}.${TableKeys.isPriority}`}
              className="table-row__item-action"
            />
          </div>

          <button
            className="table-row__column table-row__column-action"
            type="button"
            onClick={() => remove(originIndex)}
          >
            <DeleteIcon />
            <span>Delete</span>
          </button>
        </>
      );
    },
  );

TableRow.displayName = 'TableRow';

export default TableRow;

