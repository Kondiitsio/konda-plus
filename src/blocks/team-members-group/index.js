import { registerBlockType } from '@wordpress/blocks';
import { 
  useBlockProps, InspectorControls, InnerBlocks
} from '@wordpress/block-editor';
import {
  PanelBody, RangeControl, SelectControl
} from '@wordpress/components'
import { __ } from '@wordpress/i18n';
import icons from '../../icons.js';
import './main.css';

registerBlockType('konda-plus/team-members-group', {
  icon: {
    src: icons.primary
  },
  edit({ attributes, setAttributes }) {
    const { columns, imageShape } = attributes;
    const blockProps = useBlockProps({
      className: `cols-${columns}`
    });
   
    return (
      <>
        <InspectorControls>
          <PanelBody title={__('Settings', 'konda-plus')}>
            <RangeControl 
              label={__('Columns', 'konda-plus')}
              onChange={columns => setAttributes({columns})}
              value={columns}
              min={2}
              max={4}
            />
            <SelectControl 
              label={__('Image Shape', 'konda-plus')}
              value={ imageShape }
              options={[
                  { label: __('Hexagon', 'konda-plus'), value: 'hexagon' },
                  { label: __('Rabbet', 'konda-plus'), value: 'rabbet' },
                  { label: __('Pentagon', 'konda-plus'), value: 'pentagon' },
              ]}
              onChange={imageShape => setAttributes({ imageShape })}
            />
          </PanelBody>
        </InspectorControls>
        <div {...blockProps}>
          <InnerBlocks
            orientation="horizontal"
            allowedBlocks={[
              'konda-plus/team-member'
            ]}
            template={[
              [
                'konda-plus/team-member',
                {
                  name: 'John Doe',
                  title: 'CEO of konda',
                  bio: 'This is an example of a bio.'
                }
              ],
              ['konda-plus/team-member'],
              ['konda-plus/team-member']
            ]}
            // templateLock="insert"
          />
        </div>
      </>
    );
  },
  save({ attributes }) {
    const { columns } = attributes
    
    const blockProps = useBlockProps.save({
      className: `cols-${columns}`
    });

    return (
      <div {...blockProps}>
        <InnerBlocks.Content />
      </div>
    )
  }
});