import { registerBlockType } from '@wordpress/blocks';
import { 
  useBlockProps, RichText, InspectorControls
} from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components'
import { __ } from '@wordpress/i18n'
import icons from '../../icons.js'
import './main.css'

registerBlockType('konda-plus/page-header', {
  icon: icons.primary,
	edit({ attributes, setAttributes }) {
    const { content, showCategory } = attributes
    const blockProps = useBlockProps();

    return (
      <>
        <InspectorControls>
            <PanelBody title={__('General', 'konda-plus')}>
                <ToggleControl
                label={__('Show Category', 'konda-plus')}
                checked={showCategory}
                onChange={showCategory => setAttributes({ showCategory })}
                help={
                    showCategory ?
                    __('Category Shown', 'konda-plus') :
                    __('Custom Content Shown', 'konda-plus')
                }
                />
            </PanelBody>
        </InspectorControls>
         <div {...blockProps}>
            <div className="inner-page-header">
                {
                    showCategory ? 
                    <h1>{__('Category: Some Category', 'konda-plus')}</h1> :
                    <RichText
                        tagName='h1'
                        placeholder={__("Heading", "konda-plus")}
                        value={content}
                        onChange={content => setAttributes({ content })}
                    />
                }
            </div>
        </div>
      </>
    );
  }
});