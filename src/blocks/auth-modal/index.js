import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import icons from '../../icons.js'
import './main.css'

registerBlockType('konda-plus/auth-modal', {
  icon: {
    src: icons.primary
  },
  edit({ attributes, setAttributes }) {
    const { showRegister } = attributes;
    const blockProps = useBlockProps();

    return (
      <>
        <InspectorControls>
          <PanelBody title={ __('General', 'konda-plus') }>
            <ToggleControl
            label={__('Show Register', 'konda-plus')}
            help={
                showRegister ?
                __('Showing registration form', 'konda-plus') :
                __('Hiding registration form', 'konda-plus')
            }
            checked={showRegister}
            onChange={showRegister => setAttributes({ showRegister })}
            />
          </PanelBody>
        </InspectorControls>
        <div { ...blockProps }>
          {__('This block is not previewable from the editor. View your site for a live demo.', 'udemy-plus')}
        </div>
      </>
    );
  }
});