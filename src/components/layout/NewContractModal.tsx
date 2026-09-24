import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { Button } from '../ui/Button';

export default function NewContractModal() {
  const { isNewContractModalOpen, closeNewContractModal } = useAppContext();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = React.useState<string | null>(null);

  if (!isNewContractModalOpen) return null;

  const handleStartReview = () => {
    closeNewContractModal();
    navigate('/workspace');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-ink-heavy/35"
        style={{ backdropFilter: 'blur(4px)' }}
        onClick={closeNewContractModal}
      />
      
      {/* Modal */}
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden flex flex-col"
        style={{ boxShadow: '0 20px 32px -8px rgba(31,36,33,0.12)' }} // Elevation 3
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-headline-sm font-semibold">Start a new contract review</h2>
          <button 
            onClick={closeNewContractModal}
            className="text-ink-subdued hover:text-ink-heavy transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Option 1: Upload */}
          <div 
            className={`border rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${selectedOption === 'upload' ? 'border-accent-primary bg-accent-faint-wash' : 'border-gray-200 hover:border-accent-muted-tint'}`}
            onClick={() => setSelectedOption('upload')}
          >
            <span className="material-symbols-outlined text-4xl text-accent-primary mb-3">upload_file</span>
            <h3 className="font-semibold text-body-lg mb-1">Upload existing contract</h3>
            <p className="text-body-sm text-ink-subdued">Drag & drop or click to browse · PDF or DOCX, max 20MB</p>
          </div>

          {/* Option 2: Template */}
          <div 
            className={`border rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${selectedOption === 'template' ? 'border-accent-primary bg-accent-faint-wash' : 'border-gray-200 hover:border-accent-muted-tint'}`}
            onClick={() => setSelectedOption('template')}
          >
            <span className="material-symbols-outlined text-4xl text-accent-primary mb-3">description</span>
            <h3 className="font-semibold text-body-lg mb-3">Start from a template</h3>
            <div className="grid grid-cols-2 gap-2 w-full">
              {['NDA', 'MSA', 'SOW', 'Freelance Service Agreement'].map(t => (
                <div key={t} className="bg-surface-container-low border border-gray-200 text-[10px] uppercase font-semibold text-ink-subdued py-1 px-2 rounded truncate">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-100 flex justify-end gap-3 bg-surface-bright">
          <Button variant="ghost" onClick={closeNewContractModal}>Cancel</Button>
          <Button variant="primary" disabled={!selectedOption} onClick={handleStartReview}>
            Start Review &rarr;
          </Button>
        </div>
      </div>
    </div>
  );
}
